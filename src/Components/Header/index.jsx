import React,{useState} from 'react'
import Button from '@mui/material/Button';

// To Add a Menu Icon
import { IoMdMenu } from "react-icons/io";

//For Notifictaion message pop-up
import Badge  from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import  { BsBellFill } from "react-icons/bs";

// Avtar Pop-up menu
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

//User Icon 
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";


// Notification Style code
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': 
  {
    right: -3,
    top: 13,
   
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
   
  },
}));

export const Header = () => {
  const [anchorMyAcc, setAnchorMyAcc] = React.useState(null);                  {/* Account Pop-up */}
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  }
  return (
    <header className='fixed top-0 left-0 z-50 w-full h-[auto] pl-52 pr-7 py-2 bg-[#a4e325] shadow-md flex items-center justify-between'>
      <div className="part1">
        <Button className='!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgb(38,2,2)]'>
          <IoMdMenu className='text-[25px] text-[rgba(0,0,0,0.8)]'/>
        </Button>
      </div>
      
    




      <div className="part2 w-[40%] flex items-center justify-end gap-4">                      {/* Notification */}
          <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <BsBellFill />
            </StyledBadge>
          </IconButton>

          <div className="relative">                                                           {/*Account Avtar  */}
            <div className="rounded-full w-[35px] overflow-hidden cursor-pointer"onClick={handleClickMyAcc}>
              <img src='https://cdn-icons-png.flaticon.com/512/5019/5019638.png' className='w-full h-full object-cover'/>

            </div>
          <Menu
             anchorMyAcc={anchorMyAcc}
             id="account-menu"
             open={openMyAcc}
             onClose={handleCloseMyAcc}
             onClick={handleCloseMyAcc}
             slotProps={{
                paper: {
                elevation: 0,
                   sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.pape',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      > 
        <MenuItem onClick={handleCloseMyAcc} className='!bg-white'>
         <div className='flex items-center gap-3'>{/* Account Avtar PoPup */}
              <div className="rounded-full w-[35px] overflow-hidden cursor-pointer">
                 <img src='https://cdn-icons-png.flaticon.com/512/5019/5019638.png' className='w-full h-full object-cover'/>

              </div>
              <div className="info">{/* Account Name,email information etc*/}
                <h3 className='text-[15px]font-[500] leading-5'>Gopal & Harsh</h3>
                <p className='text-[12px] font-[400] opacity-50'>gopalharsh4430@gmail.com</p>


              </div>

         </div>
            </MenuItem>
            <Divider/>

                                      {/* profile and Logout Section */}
            <MenuItem onClick={handleCloseMyAcc}className='flex items-center gap-3'>
              <FaUser className='text-[17px]'/> <span className='text-[14px] '> Profile </span>{/* To Add Profile  */}
            </MenuItem>

           

            <MenuItem onClick={handleCloseMyAcc}className='flex items-center gap-3'>
              < LuLogOut className='text-[17px]' /> <span className='text-[14px] '> Log-out </span>{/* To Add a innner  Logput */}
            </MenuItem>
      </Menu>

          </div>
      </div>
    </header>
    
  )
    
  
}



export default Header;

