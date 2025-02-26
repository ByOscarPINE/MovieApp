import { Injectable } from '@angular/core'
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  SUPA_URL = 'https://gtdugezrhusgavycltak.supabase.co'
  SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0ZHVnZXpyaHVzZ2F2eWNsdGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1OTcxNzYsImV4cCI6MjA1NjE3MzE3Nn0.a6lAVc-t9EbVN0jGtk_v-O0I8KfinPH_3fUTh5csFN8'


  constructor() { 
    this.supabase = createClient(this.SUPA_URL, this.SUPA_KEY)
  }

  async getFavorites() {
    
    let { data, error } = await this.supabase
    .from('favorites_movies')
    .select('*');
    if(error){
      console.log(error)
      return [];
    }
    return data;
  }
}
