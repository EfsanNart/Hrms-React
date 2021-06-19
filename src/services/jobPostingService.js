import axios from "axios";

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobposting/getAll")
    }
    getOpenJobPostings(){
        return axios.get("http://localhost:8080/api/jobposting/getAllOpenJobPostingList")
    }
    getJobPostingsOrderByPublishedAt(){
        return axios.get("http://localhost:8080/api/jobposting/findAllByOrderByPublishedAt")
    }
}