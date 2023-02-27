import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  HashRouter,
} from "react-router-dom";
import "./assets/styles/app.scss";
import Home from "./views/Home";
import AboutTemokin from "./views/AboutTemokin";
import TeamLeaders from "./views/TeamLeaders";
import AwardsAndAchievements from "./views/AwardsAndAchievements";
import OtherBusinessVentures from "./views/OtherBusinessVentures";
import LandAcquisition from "./views/LandAcquisition";
import LicensesAndRegistrations from "./views/LicensesAndRegistrations";
import PorpertyDevelopment from "./views/PorpertyDevelopment";
import PropertyDevelopmentProject from "./views/PropertyDevelopmentProject";
import BuildingProject from "./views/BuildingProjects";
import CivilEngineering from "./views/CivilEngineering";
import ContactUs from "./views/ContactUs";
import YmRajaDatoAzwaneBinRajaAriff from "./views/YmRajaDatoAzwaneBinRajaAriff";
import YBhgDatoIrRobertTanKimKuan from "./views/YBhgDatoIrRobertTanKimKuan";
import YMRajaSulongHizaharBRajaBazian from "./views/YMRajaSulongHizaharBRajaBazian";
import TanChienWen from "./views/TanChienWen";
import JeremiahTanChienYih from "./views/JeremiahTanChienYih";
import TanChienChyi from "./views/TanChienChyi";
import ChanYoonSang from "./views/ChanYoonSang";
import LeeTeokGuah from "./views/LeeTeokGuah";
import PathooramanBinAbu from "./views/PathooramanBinAbu";
import CrystalWongWaiChing from "./views/CrystalWongWaiChing";
import SerembanMiddleRingRoad from "./views/SerembanMiddleRingRoad";
import SungaiGombakBridge from "./views/SungaiGombakBridge";
import Earthworks from "./views/Earthworks";
import TnbSubstations from "./views/TnbSubstations";
import PipeJackingWorks from "./views/PipeJackingWorks";
import PipeJackingForSG from "./views/PipeJackingForSG";
// import IstanaNegara from "./views/IstanaNegara";
// import Mahligai from "./views/Mahligai";
// import NationalCamp from "./views/NationalCamp";
// import Tropicana from "./views/Tropicana";
import TermsOfService from "./views/TermsOfService";
import PrivacyPolicy from "./views/PrivacyPolicy";
import Career from "./views/Career";
import CivilInfrastructure from "./views/CivilInfrastructure";
import Building from "./views/Building";
import { useEffect } from "react";

export default function App() {
  const history = useHistory();

  var AOS = require("aos");
  AOS.init();

  useEffect(() => {
    let width = parseInt(window.innerWidth);

    if (width >= 1024) {
      console.log(width, width > 420);
      // history.push("https://temokin.hirayamnl.com");
      const currentUrl = window.location.hash.substring(2);
      window.location.replace(`https://temokin.com/${currentUrl}`);
    }

    window.addEventListener("resize", () => {
      let width = parseInt(window.innerWidth);

      if (width >= 1024) {
        // history.push("https://temokin.hirayamnl.com");
        const currentUrl = window.location.hash.substring(2);
        window.location.replace(`https://temokin.com/${currentUrl}`);
      }
    });

    window.addEventListener("orientationchange", () => {
      let width = parseInt(window.innerWidth);
      let height = parseInt(window.innerHeight);
      let orientation = parseInt(window.orientation);

      if (orientation == 90 || orientation == -90) {
        if (height >= 1024) {
          const currentUrl = window.location.hash.substring(2);
          window.location.replace(`https://temokin.com/${currentUrl}`);
          window.location.reload();
        }
      }
    });
  }, []);

  return (
    <HashRouter>
      <Route
        render={({ location }) => {
          return (
            <div>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-temokin" component={AboutTemokin} />
                <Route exact path="/team-leaders" component={TeamLeaders} />
                <Route
                  exact
                  path="/awards-and-achievements"
                  component={AwardsAndAchievements}
                />
                <Route
                  exact
                  path="/licenses-and-registrations"
                  component={LicensesAndRegistrations}
                />
                <Route
                  exact
                  path="/other-business-ventures"
                  component={OtherBusinessVentures}
                />
                <Route
                  exact
                  path="/land-acquisition"
                  component={LandAcquisition}
                />
                <Route
                  exact
                  path="/civil-engineering"
                  component={CivilEngineering}
                />
                <Route
                  exact
                  path="/property-development"
                  component={PorpertyDevelopment}
                />
                <Route
                  exact
                  path="/property-development/:name"
                  component={PropertyDevelopmentProject}
                />
                <Route
                  exact
                  path="/building/:name"
                  component={BuildingProject}
                />
                <Route exact path="/contact-us" component={ContactUs} />
                <Route
                  exact
                  path="/team-leaders/ym-raja-dato-azwane-bin-raja-ariff"
                  component={YmRajaDatoAzwaneBinRajaAriff}
                />
                <Route
                  exact
                  path="/team-leaders/y-bhg-dato-ir-robert-tan-kim-kuan"
                  component={YBhgDatoIrRobertTanKimKuan}
                />
                <Route
                  exact
                  path="/team-leaders/y-m-raja-sulong-hizahar-b-raja-bazian"
                  component={YMRajaSulongHizaharBRajaBazian}
                />
                <Route
                  exact
                  path="/team-leaders/tan-chien-wen"
                  component={TanChienWen}
                />
                <Route
                  exact
                  path="/team-leaders/jeremiah-tan-chien-yih"
                  component={JeremiahTanChienYih}
                />
                <Route
                  exact
                  path="/team-leaders/tan-chien-chyi"
                  component={TanChienChyi}
                />
                <Route
                  exact
                  path="/team-leaders/chan-yoon-sang"
                  component={ChanYoonSang}
                />
                <Route
                  exact
                  path="/team-leaders/lee-teok-guah"
                  component={LeeTeokGuah}
                />
                <Route
                  exact
                  path="/team-leaders/pathooraman-bin-abu"
                  component={PathooramanBinAbu}
                />
                <Route
                  exact
                  path="/team-leaders/crystal-wong-wai-ching"
                  component={CrystalWongWaiChing}
                />
                <Route
                  exact
                  path="/civil-engineering/seremban-middle-ring-road"
                  component={SerembanMiddleRingRoad}
                />
                <Route
                  exact
                  path="/civil-engineering/sungai-gombak-bridge"
                  component={SungaiGombakBridge}
                />
                <Route
                  exact
                  path="/civil-engineering/earthwork-constructio-power-station-bandaru-baru-arang"
                  component={Earthworks}
                />
                <Route
                  exact
                  path="/civil-engineering/tnb-substations-33-11kv"
                  component={TnbSubstations}
                />
                <Route
                  exact
                  path="/civil-engineering/pipe-jacking-works"
                  component={PipeJackingWorks}
                />
                <Route
                  exact
                  path="/civil-engineering/pipe-jacking-for-sg-buloh-to-johor-bahru-for-water-privatization-1500m-dia-and-1350-dia"
                  component={PipeJackingForSG}
                />
                <Route
                  exact
                  path="/terms-of-service"
                  component={TermsOfService}
                />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                <Route exact path="/career" component={Career} />

                <Route
                  exact
                  path="/civil-infrastructure"
                  component={CivilInfrastructure}
                />
                <Route exact path="/building" component={Building} />
                {/* <Route
                  exact
                  path="/property-development/istana-negara"
                  component={IstanaNegara}
                />
                <Route
                  exact
                  path="/property-development/mahligai-at-nusa-damai-two-storey-and-three-storey-housing-johor"
                  component={Mahligai}
                />
                <Route
                  exact
                  path="/property-development/national-camp-and-services-northern-regions"
                  component={NationalCamp}
                />
                <Route
                  exact
                  path="/property-development/tropicana-miyu-petaling-jaya"
                  component={Tropicana}
                />
                
                /> */}
              </Switch>
            </div>
          );
        }}
      />
    </HashRouter>
  );
}
