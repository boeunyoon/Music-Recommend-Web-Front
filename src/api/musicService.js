import React from 'react';
import axios from 'axios';
//유저 토큰 가져오기
const getToken=()=>{
    return localStorage.getItem("USER_KEY")
}
//빌보드 차트 가져오기
export const getBillboardTop100=(request)=>{
    console.log('Request',request)
    return axios({
        method:'GET',
        url: `${process.env.hostUrl||'http://localhost:8080'}/top100/gettop100/${request}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        },
    })
}
// selectgenre에서 artist정보들 가져오기
export const getAllArtistList=()=>{
    return axios({
        method:'GET',
        url: `${process.env.hostUrl||'http://localhost:8080'}/selectgenre`,
        headers:{
            'Authorization':'Bearer '+getToken()
        },
    })
}
//spring 서버에 선택한 artist정보 보내기
export const sendArtistList=(artist)=>{
    console.log(JSON.stringify(artist));
    return axios({
        method:'POST',
        url: `${process.env.hostUrl||'http://localhost:8080'}/sendartist`,
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+getToken()
        },
        data: JSON.stringify(artist)
    })
}
//음악 검색 키워드 서버에 보내기
export const searchMusicKeyword=(keyword)=>{
    console.log(keyword);
    return axios({
        method:'GET',
        url: `${process.env.hostUrl||'http://localhost:8080'}/search?keyword=${encodeURIComponent(keyword)}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        },
    })
}