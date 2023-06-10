export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      blogs: {
        Row: {
          created_at: string | null;
          id: number;
          name: string;
          text: string;
          updated_at: string | null;
          url: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name?: string;
          text?: string;
          updated_at?: string | null;
          url?: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string;
          text?: string;
          updated_at?: string | null;
          url?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
