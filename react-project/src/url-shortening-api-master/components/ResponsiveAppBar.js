import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { ReactComponent as Logo } from '../images/logo.svg';

const pages = ['Features', 'Pricing', 'Resources'];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position='static' color='secondary' elevation={0}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					{/* desktop screen */}
					<IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
						<SvgIcon
							component={Logo}
							viewBox='0 0 121 33'
							sx={{ width: '100%' }}
						/>
					</IconButton>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'inherit', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>

					{/* mobile screen */}
					<Stack
						direction='row'
						justifyContent='space-between'
						sx={{ width: '100%' }}
					>
						<IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
							<SvgIcon
								component={Logo}
								viewBox='0 0 121 33'
								sx={{ width: '100%' }}
							/>
						</IconButton>
						<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								sx={{ fontSize: '2.1rem' }}
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
									'& .MuiPaper-root': {
										backgroundColor: 'hsl(257, 27%, 26%)',
									},
								}}
							>
								{/* TODO: stopped here
								make menu width fullscreen
								 */}
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign='center' color='#fff'>
											{page}
										</Typography>
									</MenuItem>
								))}
								<Divider />
								{/* TODO: add login&signup buttons wrapped in MenuItem*/}
							</Menu>
						</Box>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
