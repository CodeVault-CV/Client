import * as API from "../api/index.js";

export const getStudyList = async () => {
    try {
        const {data} = await API.getStudyList();
        return data;
    } catch(error) {
        console.error(error);
    }
}

export const getStudyInfo = async (studyId) => {
    try {
        const {data} = await API.getStudyInfo(studyId);
        return data;
    } catch(error) {
        console.error(error);
    }
}

export const createStudy = async (studyInfo) => {
    try {
        const {data} = await API.createStudy(studyInfo);
        return data;
    } catch(error) {
        console.error(error);
    }
}

export const addMember = async(memberInfo) => {
    try {
        const {status} = await API.addMember(memberInfo);
        if(status === 201) return true;
        return false;
    } catch (error) {
        console.error(error);
    }

}