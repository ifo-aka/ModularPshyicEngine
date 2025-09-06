import SystemOverview from "../store/analysisComponents/SystemOverview";
import Statistics from "../store/analysisComponents/Satatistics";
import Data from "../store/analysisComponents/Data";
import Warnings from "../store/analysisComponents/Warnings";
import Suggestions from "../store/analysisComponents/Suggestions";
import RealTimeLogs from "../store/analysisComponents/RealTimeLogs";


const Analysis = () => {    
return <>  
                <SystemOverview />
                <Statistics/>
                <Data />
                <Warnings />
                <Suggestions></Suggestions>
                <RealTimeLogs></RealTimeLogs>
                </>
}
export default Analysis;