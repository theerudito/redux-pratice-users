import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextUser, getPrewUser, getUser } from "../redux/actions/actions";

export const User = () => {
	const dispach = useDispatch();
	const users = useSelector((store) => store.result.result.data);

	useEffect(() => {
		dispach(getUser());
	}, [dispach]);

	return (
		<>
			<p>User </p>
			<button onClick={() => dispach(getPrewUser(-1))}>Prew</button>
			<button onClick={() => dispach(getNextUser(2))}>Next</button>

			{users.map((item) => (
				<div key={item.id}>
					<img src={item.avatar} alt="pic" />
					<p>
						{item.first_name} {item.last_name}{" "}
					</p>
					<p>{item.email} </p>
				</div>
			))}
		</>
	);
};
