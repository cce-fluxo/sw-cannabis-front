import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
const WEEKDAYS_LONG = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];
const WEEKDAYS_SHORT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

sessionStorage.setItem('Dias',JSON.stringify([]));

export default class Calendar extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
    };
  }

  handleDayClick(day, { selected }) {
    const selectedDays = this.state.selectedDays.concat();
    const dia=(day.toString()).slice(4,15)

    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);

      const list=JSON.parse(sessionStorage.getItem('Dias'))
      const index=list.indexOf(dia)
      function remove(value){
        return value!=dia
      }
      const filteredList=list.filter(remove)
      sessionStorage.setItem('Dias',JSON.stringify(filteredList))
      
    } else {
      selectedDays.push(day);
      const oldList=JSON.parse(sessionStorage.getItem('Dias'))
      const newList=oldList.concat(dia)
      sessionStorage.setItem('Dias',JSON.stringify(newList));
    }
    this.setState({ selectedDays });
  
    
    
    
  }

  

  render() {
    return (
      <div style={{'backgroundColor':'white'}}>
        <DayPicker
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
          locale="pt"
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          firstDayOfWeek={0}
        />
       
      </div>
     
    );
  }
}