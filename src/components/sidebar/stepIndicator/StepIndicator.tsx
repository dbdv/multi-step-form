import Styles from './stepIndicator.module.css'

type StepIndicatorProps = {
    active?: boolean,
    number: number,
    title: string
}

export default function StepIndicator(props: StepIndicatorProps) {
  return (
    <div className={Styles['step-ind-wrapper']}>
        <span 
            className={`${Styles['step-number']} ${props.active ? Styles['active-step'] : ''}`}
        >
            {props.number}
        </span>
        <p className={Styles['step-ind']}>
            step {props.number}
            <strong className={Styles['step-title']}>
                {props.title}
            </strong>
        </p>
    </div>
  )
}
