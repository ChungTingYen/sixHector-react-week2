import axios from "axios";
// const apiPath = 'iamallan';
// const adminBaseUrl = `https://ec-course-api.hexschool.io/v2/api/${apiPath}/admin`;
//const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ii1XWnBLUSJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS92dWUtY291cnNlLWFwaSIsImF1ZCI6InZ1ZS1jb3Vyc2UtYXBpIiwiYXV0aF90aW1lIjoxNzM1ODkxMTQyLCJ1c2VyX2lkIjoiOTBWTjdzZWZHa2ExOFFQd2lETUtUaVNHajlYMiIsInN1YiI6IjkwVk43c2VmR2thMThRUHdpRE1LVGlTR2o5WDIiLCJpYXQiOjE3MzU4OTExNDMsImV4cCI6MTczNjMyMzE0MywiZW1haWwiOiJpYW1hbGxhbjA5MTdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImlhbWFsbGFuMDkxN0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rVzf3YRJ_NluId7Md23CbkEiS_Nwe4FmDVnN5L6iLv1M8q2FZWpZ4iepj-6G8hDe7ikIrGtYHqQIOIj9FBdM3JdlaHW-Tg17M8_mrXmsi9kBxDX8T1aV759SksQKfH-mYdb560BQ3w_nN_GbV4q5vaGiBB73V32G2TQd0OTiopdzL8LA_muu9dgBndAruyiquRMIDHGczS5Mps8rGCF2neduN-4eiHFJ3XNm4ZYrUacv9rh8W3MlkiJKIBAUY9--DAHkxKB0Jw4SxJbiXzlr-4f1y8KwT-yN_J8NGEL8aQtCN1Fb8cgLJBYvUOxmlNm3b44ZTtWXWTDT918XQdwdWg';

const adminBaseUrl = `${import.meta.env.VITE_BASE_URL}/v2`;
console.log(adminBaseUrl);
// const headers = {
//   Authorization: token,
// };
export const adminInstance = axios.create({
  baseURL: adminBaseUrl,
  // headers,
});