import { useState, useEffect } from "react";
import axios from "axios";

let listeners = [];

let state = {
  data: {
    menu: [
      {
        name: "홈",
        url: "/",
      },
      {
        name: "코스추천",
        url: "/survey",
      },
      {
        name: "관광지",
        url: "/place",
      },
      {
        name: "나의 코스관리",
        url: "/mypage",
      },
      
      { name: "관리자 페이지",
        url: "/manage",
        auth:"admin"},
    
    ],
    categories: [
      {
        id: "12",
        title: "관광지",
      },
      {
        id: "14",
        title: "문화시설",
      },
      {
        id: "15",
        title: "축제/공연/행사",
      },
      {
        id: "25",
        title: "여행코스",
      },
      {
        id: "28",
        title: "레포츠",
      },
      {
        id: "32",
        title: "쇼핑",
      },
      {
        id: "39",
        title: "음식",
      },
    ],
    
  },
  
  error: null,
  sidebar: false,
  modal: false,
  video: false,
  request: {
    modal: false,
    text: "",
  },
};

const actions = {
  fetch: async () => {
    try {
      const response = await axios.get(
        "/api/data"
      );
      state = { ...state, data: response.data };
    } catch (err) {
      state = { ...state, error: err };
    }

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleSidebar: () => {
    state = { ...state, sidebar: !state.sidebar };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleModal: () => {
    state = { ...state, modal: !state.modal };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleRequest: (payload) => {
    state = {
      ...state,
      request: { modal: !state.request.modal, text: payload },
    };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleVideo: () => {
    state = { ...state, video: !state.video };

    for (const listener of listeners) {
      listener(state);
    }
  },
};

export const useCustomState = () => {
  const setState = useState(state)[1];

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [state, actions];
};