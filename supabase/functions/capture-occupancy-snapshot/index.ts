import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting occupancy snapshot capture...');
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch current occupancy data
    const { data: currentOccupancy, error: fetchError } = await supabase
      .from('housing_occupancy')
      .select('*');

    if (fetchError) {
      console.error('Error fetching occupancy:', fetchError);
      throw fetchError;
    }

    if (!currentOccupancy || currentOccupancy.length === 0) {
      console.log('No occupancy data found to snapshot');
      return new Response(
        JSON.stringify({ message: 'No occupancy data to snapshot' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }

    console.log(`Found ${currentOccupancy.length} locations to snapshot`);

    // Create history records for each location
    const historyRecords = currentOccupancy.map(location => {
      const availableUnits = location.total_units - location.occupied_units;
      const occupancyRate = location.total_units > 0 
        ? (location.occupied_units / location.total_units) * 100 
        : 0;

      return {
        location_name: location.location_name,
        total_units: location.total_units,
        occupied_units: location.occupied_units,
        available_units: availableUnits,
        occupancy_rate: Number(occupancyRate.toFixed(2)),
        recorded_at: new Date().toISOString()
      };
    });

    // Insert history records
    const { data: insertedData, error: insertError } = await supabase
      .from('housing_occupancy_history')
      .insert(historyRecords)
      .select();

    if (insertError) {
      console.error('Error inserting history:', insertError);
      throw insertError;
    }

    console.log(`Successfully captured snapshot for ${historyRecords.length} locations`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Captured snapshot for ${historyRecords.length} locations`,
        records: insertedData
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );

  } catch (error) {
    console.error('Error in capture-occupancy-snapshot:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
