"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";

export default function Page() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    async function getUrlFromSlug() {
      const { data, error } = await supabase
        .from("urls")
        .select()
        .eq("short_url", params.slug)
        .single();

      if (error) {
        console.error("Error fetching URL:", error);
        router.push("/");
        return;
      }

      if (data?.long_url) {
        await supabase
          .from("urls")
          .update({ clicks: data.clicks + 1 })
          .eq("short_url", params.slug);
        router.push(data.long_url);
      } else {
        // Handle case when no data is found
        console.log("No URL found for this slug");
        router.push("/");
      }
    }

    getUrlFromSlug();
  }, [router, params.slug]);

  return null;
}
