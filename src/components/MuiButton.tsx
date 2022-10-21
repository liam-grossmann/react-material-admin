import React from 'react';
import { useState } from 'react';
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export const MuiButton = () => {

    const [formats, setFormats] = useState<string[]>([]);
    const [exclusiveFormats, setExclusiveFormats] = useState<string | null>(null);

    // console.log(formats);
    // console.log(exclusiveFormats);
    
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        setFormats(updatedFormats);
    }

    const handleExclusiveFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedExclusiveFormats: string) => {
        setExclusiveFormats(updatedExclusiveFormats);
    }

    return (
        <Stack spacing={4} direction='column'>

            <Stack spacing={2} direction='row'>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
                <Button variant='text' href='http://www.google.com'>Text Href</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success'>Success</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />}>Send</Button>
                
                <IconButton aria-label='send'><SendIcon></SendIcon></IconButton>
                <IconButton aria-label='send' color='success'><SendIcon></SendIcon></IconButton>
                <IconButton aria-label='send' color='error' size='small'><SendIcon></SendIcon></IconButton>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained'>Primary</Button>
                <Button variant='contained' disableElevation>Disable Elevation</Button>
                <Button variant='contained' disableRipple>Disable Ripple</Button>
            </Stack>

            <Stack direction='row'>
                <ButtonGroup variant='outlined' size='small' orientation='vertical' color='secondary'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction='row'>
                <ToggleButtonGroup value={formats} onChange={handleFormatChange}>
                    <ToggleButton value='bold'><FormatBoldIcon></FormatBoldIcon></ToggleButton>
                    <ToggleButton value='italic'><FormatItalicIcon></FormatItalicIcon></ToggleButton>
                    <ToggleButton value='underlined'><FormatUnderlinedIcon></FormatUnderlinedIcon></ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack direction='row'>
                <ToggleButtonGroup value={exclusiveFormats} exclusive onChange={handleExclusiveFormatChange}>
                    <ToggleButton value='bold'><FormatBoldIcon></FormatBoldIcon></ToggleButton>
                    <ToggleButton value='italic'><FormatItalicIcon></FormatItalicIcon></ToggleButton>
                    <ToggleButton value='underlined'><FormatUnderlinedIcon></FormatUnderlinedIcon></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            
        </Stack>
    )
} 