import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputForm from "../inputs/InputForm";
import { ISportsFormFields, ISportsFormProps } from "../../shared/interfaces/InterfacesComponents/form/SportsForm.interface";
import { useSportsContext } from "../../hooks/useSportsContext";
import { useEffect } from "react";

const schema = yup.object().shape({
    n_sport: yup
        .string()
        .required("*El nombre del deporte es obligatorio")
        .min(3, "*El nombre debe tener al menos 3 caracteres")
        .max(15, "*El nombre no puede exceder los 15 caracteres"),
    img_sport: yup
        .string()
        .required("*La imagen del deporte es obligatoria"),
});

const SportsForm = ({ sport_data }: ISportsFormProps) => {

    const { createSport, updateSport } = useSportsContext();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            n_sport: "",
            img_sport: "",
        },
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        reset({
            n_sport: sport_data?.n_sport || "",
            img_sport: sport_data?.img_sport || "",
        });
    }, [sport_data, reset]);

    const onSubmit = handleSubmit((data: ISportsFormFields) => {
        !sport_data ? createSport(data) : updateSport({ ...sport_data, ...data });
    });

    return (
        <form onSubmit={onSubmit}>
            <InputForm<ISportsFormFields>
                label="Nombre"
                name="n_sport"
                type="text"
                register={register}
                error={errors.n_sport?.message}
            />
            <InputForm<ISportsFormFields>
                label="Imagen"
                name="img_sport"
                type="text"
                register={register}
                error={errors.img_sport?.message}
            />

            <button type="submit">
                {sport_data ? "Actualizar" : "Crear"}
            </button>
        </form>
    );
};

export default SportsForm;