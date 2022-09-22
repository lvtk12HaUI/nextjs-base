import React from "react";
import Sidebar from '../components/sidebar/index'
import useStyles from "../layouts/styles";
import PerfectScrollbar from "perfect-scrollbar";
import Head from "next/head";
import { styled } from '@mui/material/styles';
let ps;

const MainPanel = styled('div')(({ theme }) => ({
  '.ps__rail-y': { position: 'absolute', right: '0' },
}));

export default function Layout({ title, children }) {
  const mainPanel = React.createRef();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div className={classes.wrapper}>
      <Head>
        <title>
          {title ? `${title} - GOLAZO` : "GOLAZO"}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      <MainPanel className={classes.mainPanel} ref={mainPanel}>
        <div className={classes.content}>
            <div className={classes.container}>{children}</div>
          </div>
      </MainPanel>
    </div>
  )
}