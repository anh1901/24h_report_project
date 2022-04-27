import React, { useMemo, CSSProperties } from 'react';
import { Title, useGetList } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import { subDays, startOfDay } from 'date-fns';
import { useTranslation } from "react-i18next";

interface OrderStats {
    revenue: number;
    nbNewOrders: number;
}

interface State {
    nbNewOrders?: number;
    revenue?: string;
}

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const Dashboard = () => {
    const { t, i18n } = useTranslation();
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );
    const aMonthAgo = useMemo(() => subDays(startOfDay(new Date()), 30), []);

    return isXSmall ? (
        <div>
            <div style={styles.flexColumn as CSSProperties}>
                
                <VerticalSpacer />
             
                <VerticalSpacer />
               
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn as CSSProperties}>
            <div style={styles.singleCol}>
            </div>
            <div style={styles.flex}>
                
                <Spacer />
              
            </div>
            <div style={styles.singleCol}>
               
            </div>
            <div style={styles.singleCol}>
            
            </div>
        </div>
    ) : (
        <>
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                      <Title title={t('pos.dashboard.name')} />
                        <Spacer />
                       
                    </div>
                    <div style={styles.singleCol}>
                       
                    </div>
                    <div style={styles.singleCol}>
                       
                    </div>
                </div>
                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                       
                        <Spacer />
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
