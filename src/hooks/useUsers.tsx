import axios from "axios";
import type { ReqResListResponse, User } from "../interfaces";
import { useEffect, useRef, useState } from "react";

const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResListResponse>(
      "https://reqres.in/api/users",
      {
        params: {
          page: page,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const useUsers = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const currentPageRef = useRef(1);
  useEffect(() => {
    loadUsers(currentPageRef.current).then(setUsersList);
  }, []);
  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);
    if (users.length > 0) {
      setUsersList(users);
    } else {
      currentPageRef.current--;
    }
  };
  const previousPage = async () => {
    if (currentPageRef.current <= 1) return;
    currentPageRef.current--;
    const users = await loadUsers(currentPageRef.current);
    setUsersList(users);
  };
  return {
    // Properties
    currentPageRef,
    usersList,

    // Methods
    nextPage,
    previousPage,
  };
};
