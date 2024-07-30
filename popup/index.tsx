import Checkbox from "@mui/material/Checkbox"
import * as styles from "./style.module.css"
import { Button, Card, CardActions, CardContent, CardHeader, FormControlLabel, FormGroup, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import TimerSetting from "~config/timerSetting"
import TimerStorage from "~storage/timerStorage"
import { RedirectSetting } from "~config/RedirectSetting"

function PopupIndex() {
    const [redirectState, setRedirectState] = useState(false)
    const [time, setTime] = useState(0)
    const timerSetting = new TimerSetting()
    const redirectSettnig = new RedirectSetting()

    useEffect(() => {
        const getTime = async () => {
            setTime(await timerSetting.getDuration() / 1000)
        }
        const getRedirectState = async () => {
            setRedirectState(await redirectSettnig.getState())
            console.log(await redirectSettnig.getState())
        }
        getTime()
        getRedirectState()
    }, [])

    const handleTime = (event) => {
        setTime(event.target.value)
    }

    const handleState = (event) => {
        setRedirectState(!event.target.value)
    }

    const saveSettings = () => {
        timerSetting.setDurationInSeconds(time)
        redirectSettnig.setState(redirectState)
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
                        <FormControlLabel control={<Checkbox onClick={handleState} checked={redirectState} />} label="Перенаправление с сторонних страниц"/>
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