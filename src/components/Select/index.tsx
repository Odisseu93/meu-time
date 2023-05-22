import Select, { SingleValue } from 'react-select';


type Options = {
	value: string,
	label: string,
};

interface FormSelectProps {
	options: Options[],
	name: string,
	classNames: {
		clsWrapper?: string,
		clsLabel?: string,
		clsSelect?: string,
	},
	label: string,
	handleChange: (e: SingleValue<{
		value: string,
		label: string,
	}>) => void,
}

const FormSelect: React.FC<FormSelectProps> = ({ options, name, classNames, label, handleChange }) => {

	return (
		<div className={classNames['clsWrapper'] ?? 'form-gorup grid gap-1 mx-auto w-[200px]'}>
			<label className={classNames['clsLabel']?? 'text-violet-400 text-center ps-1 text-2xl'}>{label}</label>
			<Select className={classNames['clsSelect'] ?? 'text-violet-400'}
				name={name}
				onChange={(e: SingleValue<{
					value: string,
					label: string,
				}>
				) => handleChange(e)} options={options} />
		</div>
	)
}


export default FormSelect 