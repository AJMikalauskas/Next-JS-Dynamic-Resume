 import { GetServerSideProps, GetStaticProps } from "next"
import MicrosoftResume from "../components/MicrosoftResume"
import { fields } from "../typings"
import getResumeData from "../lib/retrieveData";
import {server} from "../config";
import { useSelector, useDispatch} from 'react-redux';
import { store } from "../store";
import { getAllResumeData } from "../slices/resumeDataSlice";

interface Props {
  allData: fields,
}

const fetchResumeData = async () => {
  // try {
    let resumeData = await fetch(`${server}/api/retrieveAllData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resumeData.json();
    //return res.status(200).json();
  // } catch (error) {
  //   throw new Error("Problem Fetching Resume Data Google");
  // }
};

const microsoft = ({allData}:Props) => {
 // const data = useSelector(getAllResumeData);
  //console.log("data...", data);
 // console.log(store.getState());
  //console.log(store.getState().resumeData);
  let propsPassedInViaRedux = store.getState().resumeData.data;
  // .resumeData.data
  //console.log(allData);
  return (
    // How to send data down via props, we get data back and data property set to correct data, but how do we send???
     <MicrosoftResume data={propsPassedInViaRedux} />
  )
}
// SSG - getStaticProps vs SSR - getServerSideProps?
//   }
// }
export default microsoft;