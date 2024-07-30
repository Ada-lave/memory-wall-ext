import Checkbox from "@mui/material/Checkbox"
import * as styles from "./style.module.css"
import { Button, Card, CardActions, CardContent, CardHeader, FormControlLabel, FormGroup, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import TimerSetting from "~config/timerSetting"
import TimerStorage from "~storage/timerStorage"

function PopupIndex() {
    const [redirectState, setRedirectSettings] = useState(false)
    const [time, setTime] = useState(0)
    const timerSetting = new TimerSetting(new TimerStorage())

    useEffect(() => {
        const getTime = async () => {
            setTime(await timerSetting.getDuration() / 1000)
        }

        getTime()
    }, [])

    const handleTime = (event) => {
        setTime(event.target.value)
        console.log(time)
    }

    const saveSettings = () => {
        timerSetting.setDurationInSeconds(time)
    }
    return (
        <div className={styles.option}>
            <Card
                sx={{
                    height: "100%"
                }}>
                <CardHeader
                    title="Настройки">
                </CardHeader>
                <CardContent>
                    <FormGroup >
                        <FormControlLabel control={<Checkbox />} label="Перенаправление с сторонних страниц"/>
                        <FormControlLabel control={<TextField value={time} onChange={handleTime} size="small" sx={{ width: "40%", marginRight:"1rem" }} type="number"/>} label="Время бездействия (сек)"/>
                    </FormGroup>
                </CardContent>

                <CardActions sx={{
                    marginTop: "40px",
                    justifyContent: "center"
                }}>
                    <Button onClick={saveSettings} variant="contained"> Сохранить</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default PopupIndex