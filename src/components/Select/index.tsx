import Select from 'react-select';


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
	isRequired: boolean,
}

const FormSelect: React.FC<FormSelectProps> = ({ options, name, classNames, label, isRequired }) => {

	return (
		<div className={classNames['clsWrapper'] ?? 'form-gorup grid gap-1 mx-auto w-[200px]'}>
			<label className={classNames['clsLabel'] ?? 'text-violet-400 text-center ps-1 text-xl'}>{label}</label>
			<Select className={classNames['clsSelect'] ?? 'text-violet-400'}
				name={name}
				options={options}
				required={isRequired}
			/>
		</div>
	)
}


export default FormSelect 