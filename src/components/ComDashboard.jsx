
import Controls from './DashBoardComponents/Controls';

import MemoryStats from './RealTimecom';
import SystemOverview from "./DashBoardComponents/SystemOverview";
import Statistics from "./DashBoardComponents/Satatistics";
import Data from "./DashBoardComponents/Data";
import Warnings from "./DashBoardComponents/Warnings";
import Suggestions from "./DashBoardComponents/Suggestions";
import RealTimeLogs from "./DashBoardComponents/RealTimeLogs";
import Styles from "../stylesheets/ComDashboard.module.css"
import { BiLogOut } from 'react-icons/bi';




const ComDashboard = () => {
return <div className={Styles.dashboard}>
        <div className={Styles.controlsAndLogo}>
        <Controls  />
        </div>
        <div className={Styles.dashBoardContent}>
          <SystemOverview  />
                <Statistics/>
                <Data />
                <Warnings />
                <Suggestions></Suggestions>
                <RealTimeLogs></RealTimeLogs>
      </div>
      <div className={Styles.aiCommunicator}>
        <div className={Styles.aiCommunicatorWrapper}>
        <MemoryStats />
        </div>
      </div>
      {/* <BiLogOut color='white' /> */}
</div>
}
export default ComDashboard;