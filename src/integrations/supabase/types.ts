export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      donations: {
        Row: {
          amount: number
          created_at: string
          currency: string
          donor_name: string | null
          id: string
          message: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          donor_name?: string | null
          id?: string
          message?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          donor_name?: string | null
          id?: string
          message?: string | null
        }
        Relationships: []
      }
      emergency_alerts: {
        Row: {
          amount: string | null
          created_at: string
          id: string
          is_active: boolean
          message: string
          priority: number
          type: Database["public"]["Enums"]["alert_type"]
        }
        Insert: {
          amount?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          message: string
          priority?: number
          type: Database["public"]["Enums"]["alert_type"]
        }
        Update: {
          amount?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          message?: string
          priority?: number
          type?: Database["public"]["Enums"]["alert_type"]
        }
        Relationships: []
      }
      feedback: {
        Row: {
          category: string | null
          contact_info: string | null
          created_at: string
          description: string
          feedback_type: string
          id: string
          resource_name: string | null
          submitter_email: string | null
          submitter_name: string | null
        }
        Insert: {
          category?: string | null
          contact_info?: string | null
          created_at?: string
          description: string
          feedback_type: string
          id?: string
          resource_name?: string | null
          submitter_email?: string | null
          submitter_name?: string | null
        }
        Update: {
          category?: string | null
          contact_info?: string | null
          created_at?: string
          description?: string
          feedback_type?: string
          id?: string
          resource_name?: string | null
          submitter_email?: string | null
          submitter_name?: string | null
        }
        Relationships: []
      }
      housing_occupancy: {
        Row: {
          created_at: string
          id: string
          last_updated: string
          location_name: string
          occupied_units: number
          total_units: number
        }
        Insert: {
          created_at?: string
          id?: string
          last_updated?: string
          location_name: string
          occupied_units?: number
          total_units?: number
        }
        Update: {
          created_at?: string
          id?: string
          last_updated?: string
          location_name?: string
          occupied_units?: number
          total_units?: number
        }
        Relationships: []
      }
      housing_occupancy_history: {
        Row: {
          available_units: number
          created_at: string
          id: string
          location_name: string
          occupancy_rate: number
          occupied_units: number
          recorded_at: string
          total_units: number
        }
        Insert: {
          available_units: number
          created_at?: string
          id?: string
          location_name: string
          occupancy_rate: number
          occupied_units: number
          recorded_at?: string
          total_units: number
        }
        Update: {
          available_units?: number
          created_at?: string
          id?: string
          location_name?: string
          occupancy_rate?: number
          occupied_units?: number
          recorded_at?: string
          total_units?: number
        }
        Relationships: []
      }
      news_updates: {
        Row: {
          created_at: string
          id: string
          is_active: boolean | null
          link: string
          published_date: string
          source: string | null
          title_en: string
          title_id: string | null
          title_tl: string | null
          title_zh: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          link: string
          published_date: string
          source?: string | null
          title_en: string
          title_id?: string | null
          title_tl?: string | null
          title_zh?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          link?: string
          published_date?: string
          source?: string | null
          title_en?: string
          title_id?: string | null
          title_tl?: string | null
          title_zh?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      safety_reports: {
        Row: {
          additional_info: string | null
          block: string | null
          contact_info: string | null
          created_at: string
          flat_number: string | null
          id: string
          name: string | null
          report_type: string
          reported_at: string
        }
        Insert: {
          additional_info?: string | null
          block?: string | null
          contact_info?: string | null
          created_at?: string
          flat_number?: string | null
          id?: string
          name?: string | null
          report_type: string
          reported_at?: string
        }
        Update: {
          additional_info?: string | null
          block?: string | null
          contact_info?: string | null
          created_at?: string
          flat_number?: string | null
          id?: string
          name?: string | null
          report_type?: string
          reported_at?: string
        }
        Relationships: []
      }
      timeline_events: {
        Row: {
          created_at: string
          description_en: string | null
          description_id: string | null
          description_tl: string | null
          description_zh: string | null
          event_time: string
          event_type: string
          id: string
          is_critical: boolean | null
          priority: number
          title_en: string
          title_id: string
          title_tl: string
          title_zh: string
        }
        Insert: {
          created_at?: string
          description_en?: string | null
          description_id?: string | null
          description_tl?: string | null
          description_zh?: string | null
          event_time: string
          event_type: string
          id?: string
          is_critical?: boolean | null
          priority?: number
          title_en: string
          title_id: string
          title_tl: string
          title_zh: string
        }
        Update: {
          created_at?: string
          description_en?: string | null
          description_id?: string | null
          description_tl?: string | null
          description_zh?: string | null
          event_time?: string
          event_type?: string
          id?: string
          is_critical?: boolean | null
          priority?: number
          title_en?: string
          title_id?: string
          title_tl?: string
          title_zh?: string
        }
        Relationships: []
      }
      volunteer_registrations: {
        Row: {
          availability: string | null
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string | null
          preferred_areas: string[] | null
          skills: string[] | null
        }
        Insert: {
          availability?: string | null
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          preferred_areas?: string[] | null
          skills?: string[] | null
        }
        Update: {
          availability?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          preferred_areas?: string[] | null
          skills?: string[] | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_safety_report_counts: {
        Args: never
        Returns: {
          count: number
          report_type: string
        }[]
      }
    }
    Enums: {
      alert_type: "donation" | "volunteer" | "alert"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      alert_type: ["donation", "volunteer", "alert"],
    },
  },
} as const
