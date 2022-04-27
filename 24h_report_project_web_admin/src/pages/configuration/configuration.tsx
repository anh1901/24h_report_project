import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useTranslation } from "react-i18next";
import {  useTheme, Title } from 'react-admin';

import { darkTheme, lightTheme } from '../../layout/themes';

const Configuration = () => {
    const { t, i18n } = useTranslation();
    const [theme, setTheme] = useTheme();
    function changeLanguage(e:any) {
        i18n.changeLanguage(e.target.value);
    }
    return (
        <Card>
            <Title title={t('pos.configuration')} />
            <CardContent>
                <Box sx={{ width: '10em', display: 'inline-block' }}>
                    {t('pos.theme.name')}:
                </Box>
                <Button
                    variant="contained"
                    sx={{ margin: '1em' }}
                    color={
                        theme?.palette?.mode === 'light'
                            ? 'primary'
                            : 'secondary'
                    }
                    onClick={() => setTheme(lightTheme)}
                >
                    {t('pos.theme.light')}
                </Button>
                <Button
                    variant="contained"
                    sx={{ margin: '1em' }}
                    color={
                        theme?.palette?.mode === 'dark'
                            ? 'primary'
                            : 'secondary'
                    }
                    onClick={() => setTheme(darkTheme)}
                >
                    {t('pos.theme.dark')}
                </Button>
            </CardContent>
            <CardContent>
                <Box sx={{ width: '10em', display: 'inline-block' }}>
                    {t('pos.language')}:
                </Box>
                <Button
                    variant="contained"
                    sx={{ margin: '1em' }}
                    color={i18n.language === 'en' ? 'primary' : 'secondary'}
                    onClick={changeLanguage} value='en'
                >
                    {t('pos.lang.en')}
                </Button>
                <Button
                    variant="contained"
                    sx={{ margin: '1em' }}
                    color={i18n.language === 'vi' ? 'primary' : 'secondary'}
                    onClick={changeLanguage} value='vi'
                >
                    {t('pos.lang.vi')}
                </Button>
            </CardContent>
        </Card>
    );
};

export default Configuration;
