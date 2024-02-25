import {
    Box,
    Stack,
    Avatar,
    Typography,
    IconButton
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const listMessages = ({ data }) => {
    let storedPersonID = null;
    const listMessages = [
        {
            id: 1,
            primaryPersonID: 1,
            history_messages: [
                {
                    personID: 2,
                    personName: "Trương Dương Minh Nhật",
                    content: "OK. Cách này cũng dc nhưng mà nó rườm rà, dài dòng quá, không có cách nào tối ưu hơn hay sao mà phải dùng đến cách này vậy?",
                    time: "16:51",
                    image: ""
                },
                {
                    personID: 1,
                    personName: "Nguyễn Huy Hoàng",
                    content: "Thử làm cách này xem, cách này ổn ko làm, đi làm cách khác?",
                    time: "16:50",
                    image: ""
                },
                {
                    personID: 1,
                    personName: "Nguyễn Huy Hoàng",
                    content: "Dr, làm theo cách đó thôi chứ còn cách nào khác đâu?",
                    time: "16:50",
                    image: ""
                }
            ]
        },
        {
            id: 2,
            primaryPersonID: 1,
            history_messages: [
                {
                    personID: 2,
                    personName: "Trương Dương Minh Nhật",
                    content: "OK. Cách này cũng dc nhưng mà nó rườm rà, dài dòng quá, không có cách nào tối ưu hơn hay sao mà phải dùng đến cách này vậy?",
                    time: "16:51",
                    image: ""
                },
                {
                    personID: 1,
                    personName: "Nguyễn Huy Hoàng",
                    content: "Thử làm cách này xem, cách này ổn ko làm, đi làm cách khác?",
                    time: "16:50",
                    image: ""
                },
                {
                    personID: 1,
                    personName: "Nguyễn Huy Hoàng",
                    content: "Dr, làm theo cách đó thôi chứ còn cách nào khác đâu?",
                    time: "16:50",
                    image: ""
                }
            ]
        }
    ]

    return (
        <Stack direction={"column-reverse"} sx={{ width: "100%", height: "100%" }} spacing={1} ml={1}>
            {listMessages.map(item => {
                storedPersonID = item.primaryPersonID
                return item.id === data && item.history_messages.map((message, key) => {
                    if (storedPersonID === message.personID) {
                        return (<Stack key={key} direction={"row-reverse"} spacing={1} paddingRight={3} paddingBottom={2}>
                            <Stack direction={"column"} spacing={1} sx={{ backgroundColor: "lightblue", width: "fit-content", borderRadius: "10px", padding: "10px", position: 'relative', display: 'block' }}>
                                <Typography>
                                    {message.content}
                                </Typography>
                                <Typography variant='body2' sx={{ color: "grey" }}>
                                    {message.time}
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} position={"relative"} sx={{ width: '200px' }}>
                                <Stack direction={"row"} spacing={1} backgroundColor={"white"} borderRadius={2} position={"absolute"} sx={{ bottom: 0, marginBottom: 1.5, padding: 0.5, display: 'none' }}>
                                    <IconButton sx={{ padding: 0 }}>
                                        <FormatQuoteIcon />
                                    </IconButton>
                                    <IconButton sx={{ padding: 0 }}>
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton sx={{ padding: 0 }}>
                                        <MoreHorizIcon />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Stack>)
                    } else {
                        return (<Stack direction={"row"} spacing={1} ml={1} paddingBottom={2}>
                            <Box>
                                <Avatar
                                    alt={message.personName}
                                    src={message.image}
                                />
                            </Box>
                            <Stack direction={"column"} spacing={1} sx={{ backgroundColor: "white", width: "fit-content", borderRadius: "10px", padding: "10px", position: 'relative', display: 'block' }}>
                                <Typography variant='body2' sx={{ color: "grey" }}>{message.personName}</Typography>
                                <Typography>
                                    {message.content}
                                </Typography>
                                <Typography variant='body2' sx={{ color: "grey" }}>
                                    {message.time}
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} position={"relative"} sx={{ width: '200px' }}>
                                <Stack direction={"row"} spacing={1} backgroundColor={"white"} borderRadius={2} position={"absolute"} sx={{ bottom: 0, marginBottom: 1.5, padding: 0.5, display: 'none' }}>
                                    <IconButton sx={{ padding: 0 }}>
                                        <FormatQuoteIcon />
                                    </IconButton>
                                    <IconButton sx={{ padding: 0 }}>
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton sx={{ padding: 0 }}>
                                        <MoreHorizIcon />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Stack>)
                    }
                })
            })}
        </Stack>
    )

}

export default listMessages;