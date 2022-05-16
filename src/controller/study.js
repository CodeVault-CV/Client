import * as API from "../api/index.js";

export const getStudyList = async () => {
    try {
        const data = await API.getStudyList();
        return data;
    } catch(error) {
        console.error(error);
    }
}

export const getStudyInfo = async (studyId) => {
    try {
        const data = await API.getStudyInfo(studyId);
        return data;
    } catch(error) {
        console.error(error);
    }
}

export const createStudy = async (studyInfo) => {
    try {
        const data = await API.createStudy(studyInfo);
        return data;
    } catch(error) {
        console.error(error);
    }
}