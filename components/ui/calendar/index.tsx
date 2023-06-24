import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
const Calendar = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        styles: { branding: { brandColor: '#18181b' } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);
  return <button data-cal-link="wh0sumit/15min" />;
};

export default Calendar;