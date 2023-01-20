import LineNotice from "../components/ui/main/LineNotice";
import MainBanner from "../components/ui/main/MainBanner";
import MainPromotionBanner from "../components/ui/main/MainPromotionBanner";
import NewRewards from "../components/ui/main/NewRewards";

function Main() {
  return ( 
    <div id="conatiner">
      <MainBanner/>
      <LineNotice />
      <MainPromotionBanner />
      <NewRewards />
    </div>
  );
}

export default Main;