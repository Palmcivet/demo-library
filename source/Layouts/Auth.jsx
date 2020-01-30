import React, { useState } from "react";
import { Button, Checkbox, Input, Tooltip } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { NavBar } from "./NavBar";
import { creator as authCreator } from "../Data/modules/auth";

const AuthView = (props) => {
	const { from } = props.location.state || { from: { pathname: "/" } };
	const { redirectToReferrer } = props;

	const { match, location } = props;

	if (redirectToReferrer) {
		return <Redirect to={from} />;
	}

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const bgPic = {
		backgroundImage: "url('https://api.dujin.org/bing/1920.php')",
		objectFit: "cover",
		height: "100vh",
		width: "100vw",
	};

	const container = {
		background: "rgba(0,0,0,.6)",
		height: "100vh",
		width: "100vw",
	};

	const bgStyle = {
		menuBackground: "rgba(190, 170, 170, 0.35)",
		menuBoxShadow: "-4px -4px 8px rgba(0,0,0,.75)",
	};

	const iptField = {
		maxWidth: "300px",
		maxHeight: "450px",
		height: "270px",
		margin: "calc(50vh - 24px - 12%) auto",
		zIndex: "999",
		padding: "2em 2em",
		background: "rgba(255,255,255,.04)",
		boxShadow: "-1px 4px 28px 0 rgba(0,0,0,.75)",
		gridTemplateColumns: "repeat(2, 1fr)",
		gridTemplateRows: "repeat(2, 1.4fr) repeat(3, 1fr)",
		gridRrowGap: "10px",
		placeItems: "center center",
		gridColumnGap: "0px",
		gridRowGap: "0px",
		display: "grid",
	};

	return (
		<div style={bgPic}>
			<div style={container}>
				<NavBar location={location} bgStyle={bgStyle} />

				{/* <img src="https://api.dujin.org/bing/1920.php" alt="Bing 每日图片" /> */}
				<div style={iptField}>
					<Input
						placeholder="username"
						value={username}
						allowClear
						onChange={(e) => setUsername(e.target.value)}
						style={{
							gridArea: "1 / 1 / 2 / 3",
						}}
					/>
					<Input.Password
						placeholder="password"
						value={password}
						visibilityToggle
						allowClear
						onChange={(e) => setPassword(e.target.value)}
						style={{
							gridArea: "2 / 1 / 2 / 3",
						}}
					/>

					<Tooltip
						title="为什么不重新注册一个呢"
						trigger="click"
						placement="left"
						style={{
							gridArea: "3 / 1 / 4 / 2",
						}}
					>
						<a style={{ color: "white", fontSize: "12px", fontWeight: 350 }}>
							忘记密码？
						</a>
					</Tooltip>
					<Tooltip
						title="那我也无能为力"
						trigger="click"
						placement="right"
						style={{
							gridArea: "3 / 2 / 4 / 3",
						}}
					>
						<a style={{ color: "white", fontSize: "12px", fontWeight: 350 }}>
							没有账号？
						</a>
					</Tooltip>

					{/* <Button
						type="ghost"
						onClick={() => props.login(username, password)}
						style={{
							color: "white",
							fontSize: "12px",
							fontWeight: 350,
							gridArea: "4 / 1 / 5 / 3",
							alignSelf: "end",
							width: "240px",
						}}
						>
						登录
					</Button> */}

					<Button
						type="primary"
						onClick={() => props.login(123456, 123456)}
						style={{
							color: "white",
							fontSize: "12px",
							fontWeight: 350,
							gridArea: "4 / 1 / 5 / 3",
							alignSelf: "end",
							width: "240px",
						}}
					>
						测试
					</Button>

					<Checkbox
						style={{
							color: "white",
							fontSize: "12px",
							fontWeight: 350,
							gridArea: "5 / 1 / 6 / 3",
							alignSelf: "end",
						}}
					>
						保持登录状态
					</Checkbox>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators(authCreator, dispatch),
	};
};

const Auth = connect(mapStateToProps, mapDispatchToProps)(AuthView);

export { Auth };
