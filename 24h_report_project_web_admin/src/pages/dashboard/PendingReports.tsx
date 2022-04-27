import * as React from 'react';
import {
    ListItem,
    ListItemSecondaryAction,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {  useReference } from 'react-admin';
import { Customer, Report } from '../../types';
import { useTranslation } from "react-i18next";

interface Reports {
    report: Report;
}

export const PendingReport = (reports: Reports) => {
    const { report } = reports;
    const { t} = useTranslation();
    const { referenceRecord: customer, isLoading } = useReference<Customer>({
        reference: 'customers',
        id: report.customer_id,
    });

    return (
        <ListItem button component={Link} to={`/commands/${report.id}`}>
            <ListItemAvatar>
                {isLoading ? (
                    <Avatar />
                ) : (
                    <Avatar
                        src={`${customer?.avatar}?size=32x32`}
                        sx={{
                            bgcolor: 'background.paper',
                        }}
                    />
                )}
            </ListItemAvatar>
            <ListItemText
                primary={new Date(report.date).toLocaleString('en-GB')}
                secondary={t('pos.dashboard.name', {
                    smart_count: report.basket.length,
                    nb_items: report.basket.length,
                    customer_name: customer
                        ? `${customer.first_name} ${customer.last_name}`
                        : '',
                })}
            />
            <ListItemSecondaryAction>
                <Box
                    component="span"
                    sx={{
                        marginRight: '1em',
                        color: 'text.primary',
                    }}
                >
                    {report.total}
                </Box>
            </ListItemSecondaryAction>
        </ListItem>
    );
};
