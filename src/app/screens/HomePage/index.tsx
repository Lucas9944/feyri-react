
import { BedSheetsSail } from "./bedsheetsSail";
import { SwiperEvents } from "./SwiperEvents";
import { Statistics } from "./statistics";
import { TopInterior } from "./topInterior";
import { TopRating } from "./topRating";
import { Advertisements } from "./advertiSements";
import "../../../css/home.css";

export function HomePage() {
  return (
    <div className="homepage">
      <Statistics />
      <TopInterior />
      <Advertisements />
      <BedSheetsSail />
      <TopRating />
      <SwiperEvents />
    </div>
  );
}