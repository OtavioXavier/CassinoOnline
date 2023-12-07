import PaymentMethods from '../PaymentMethods';

export default function DepositePage01({type}) {
    return (
        <div className="mt-10">
            <div className='flex flex-col items-start gap-2 mb-7'>
            <label htmlFor="pix" className='text-stone-300'>Recomendado</label>
            <PaymentMethods id="pix" method="Pix" payment={type}/>
            </div>
            <div className='flex flex-col items-start gap- mb-4'>
            <label htmlFor="pix" className='text-stone-300'>Outros métodos</label>
            <PaymentMethods id="pix" method="Pix" payment={type}/>
            </div>
            <div className='flex flex-col gap-4'>
            <PaymentMethods id="pix" method="Pix" payment={type}/>
            <PaymentMethods id="pix" method="Pix" payment={type}/>
            <PaymentMethods id="pix" method="Pix" payment={type}/>
            <PaymentMethods id="pix" method="Pix" payment={type}/>
            </div>
        </div>
    )
}