import * as React from 'react'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Link from '@mui/material/Link'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'

const categories = [
  {
    id: '대시보드',
    icon: <DashboardIcon />,
    children: [
      {
        id: '대시보드의 대시보드',
        active: true,
      },
      { id: '함께하는 대시보드' },
    ],
  },
  {
    id: '회원관리',
    icon: <GroupIcon />,
    children: [{ id: '회원목록 조회' }, { id: '회원기본정보 조회' }, { id: '상담내역관리' }],
  },
]

const item = {
  py: 0.5,
  px: 2,
  // color: 'rgba(255, 255, 255, 0.7)',
  // '&:hover, &:focus': {
  //   bgcolor: 'rgba(255, 255, 255, 0.08)',
  // },
}

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.2) inset',
  height: 60,
  py: 2,
  px: 0,
  justifyContent: 'center',
}

export default function Navigator(props) {
  const { ...other } = props

  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <Link href="/" sx={{ textDecoration: 'none', fontWeight: 'bold', fontSize: 22 }}>
            VITAMATE
          </Link>
        </ListItem>
        {categories.map(({ id, icon, children }) => (
          <Box key={id}>
            <ListItemButton onClick={handleClick} sx={{ py: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 24 }}>{icon}</ListItemIcon>
              <ListItemText primary={id} sx={{ pl: 2 }} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            {children.map(({ id: childId, active }) => (
              <Collapse in={open} timeout="auto" unmountOnExit key={childId}>
                <ListItem disablePadding>
                  <ListItemButton selected={active} sx={{ ...item }}>
                    <ListItemText primary={childId} sx={{ pl: 2 }} />
                  </ListItemButton>
                </ListItem>
              </Collapse>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  )
}
