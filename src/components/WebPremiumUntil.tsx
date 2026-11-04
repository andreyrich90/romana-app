import { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { supabase } from '../lib/supabase';
import { usePalette } from '../lib/theme';
import { useAuth } from '../state/auth';
import { useProgress } from '../state/progress';

/** For Premium bought on the site: "forever" or "until 12.12.2026". Nothing otherwise. */
export function WebPremiumUntil() {
  const c = usePalette();
  const { t, progress } = useProgress();
  const { session } = useAuth();
  const userId = session?.user.id;
  const [line, setLine] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase || !userId) return;
    let alive = true;
    supabase.rpc('my_web_premium').then(({ data }) => {
      const row = Array.isArray(data) ? data[0] : null;
      if (!alive || !row) return;
      if (row.lifetime) setLine(t.webForever);
      else if (row.paid_until && new Date(row.paid_until).getTime() > Date.now()) {
        const d = new Date(row.paid_until).toLocaleDateString(progress.lang === 'ua' ? 'uk-UA' : 'ru-RU');
        setLine(`${t.webUntil} ${d}`);
      }
    });
    return () => {
      alive = false;
    };
  }, [userId, t, progress.lang]);

  return line ? <Text style={{ color: c.muted, textAlign: 'center', fontSize: 15 }}>{line}</Text> : null;
}
