import Styles from './sidebar.module.css';
import StepIndicator from './stepIndicator/StepIndicator';

type step = {
    number: number,
    title: string,
}

const steps: step[] = [{
    number: 1,
    title: 'your info'
}, {
    number: 2,
    title: 'select plan'
}, {
    number: 3,
    title: 'add-ons'
},{
    number: 4,
    title: 'summary'
}];

export default function Sidebar() {
  return (
    <div className={Styles['sidebar-wrapper']}>
        <div className={Styles['sidebar']}>
        {
            steps.map(step=><StepIndicator key={step.number} number={step.number} title={step.title}/>)
        }
            
        </div>
    </div>
  )
}
