import axios from "axios";
import { GETDATA, NEXTDATA, PREWDATA } from "../types/types";

export const getUser = () => async (dispach) => {
	try {
		const res = await axios.get("https://reqres.in/api/users?page");
		dispach({
			type: GETDATA,
			payload: {
				user: res.data.data
			}
		});
	} catch (error) {
		console.log(error);
	}
};

export const getNextUser = (num) => async (dispach, getData) => {
	const next = +num;
	try {
		const res = await axios.get(`https://reqres.in/api/users?page=${next}`);
		dispach({
			type: NEXTDATA,
			payload: {
				user: res.data.data,
				offset: next
			}
		});
	} catch (error) {
		console.log(error);
	}
};

export const getPrewUser = (num) => async (dispach) => {
	const prew = +num;

	try {
		const res = await axios.get(`https://reqres.in/api/users?page${prew}`);
		dispach({
			type: PREWDATA,
			payload: {
				user: res.data.data
			}
		});
	} catch (error) {
		console.log(error);
	}
};
