import React from 'react'
import TodosApp from "../public/components/TodosApp";
import Link from 'next/link'
import {ScheduleComponent,Inject,Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth} from '@syncfusion/ej2-react-schedule'

function Calendar(){
    return(
        <div>
            <ScheduleComponent>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth ]} />
            </ScheduleComponent>
        </div>
    )
}

export default Calendar;