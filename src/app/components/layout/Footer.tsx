import { Stack, Typography } from "@mui/material";

export default function Footer(): JSX.Element {
	return (
		<Stack direction="row" sx={{ boxShadow: 10 }}>
			<Typography
				align="center"
				sx={{
					mt: 0.5,
					color: "white",
					mx: "10%"
				}}
				variant="subtitle1"
			>
				Chełmscy Emeryci SW {new Date().getFullYear()}
			</Typography>
		</Stack>
	);
}
