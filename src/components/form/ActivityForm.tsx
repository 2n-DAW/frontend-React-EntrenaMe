import * as yup from "yup";
import { useForm } from "react-hook-form";
import useActivity from "../../hooks/useActivitiy";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { IActivitiesFormFields, IActivitiesFormProps } from "../../shared/interfaces/InterfacesComponents/form/ActivitiesForm.interface";
import InputForm from "../inputs/InputForm";
import SelectForm from "../inputs/SelectForm";



const schema = yup.object().shape({
    n_activity: yup
        .string()
        .required("*El nombre de la actividad es obligatorio")
        .min(3, "*El nombre debe tener al menos 3 caracteres")
        .max(15, "*El nombre no puede exceder los 15 caracteres"),
    img_activity: yup
        .string()
        .required("*La imagen de la actividad es obligatoria"),
    week_day: yup
        .string()
        .required("*El día de la actividad es obligatorio"),
    slot_hour: yup
        .string()
        .required("*La hora de la actividad es obligatoria"),
    description: yup
        .string()
        .required("*La descripción de la actividad es obligatoria")
        .min(3, "*La descripción debe tener al menos 3 caracteres")
        .max(100, "*La descripción no puede exceder los 100 caracteres"),
    spots: yup
        .number()
        .required("*Las plazas de la actividad son obligatorias")
        .min(1, "*Las plazas deben ser al menos 1"),
    id_user_instructor: yup
        .string()
        .required("*El ID del instructor de la actividad es obligatorio"),
    id_sport: yup
        .number()
        .required("*El ID del deporte de la actividad es obligatorio"),
        
});

const ActivityForm = ({ activity_data }: IActivitiesFormProps) => {

    const { createActivity, updateActivity } = useActivity();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            n_activity: "",
            img_activity: "",
            week_day: "",
        },
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        reset({
            n_activity: activity_data?.n_activity || "",
            img_activity: activity_data?.img_activity || "",
            week_day: activity_data?.week_day || "",
        });
    }, [activity_data, reset]);

    const onSubmit = handleSubmit((data: IActivitiesFormFields) => {
        console.log({ ...activity_data, ...data, spots_available: data.spots });
        !activity_data ? createActivity({...data, spots_available: data.spots}) : updateActivity({ ...activity_data, ...data, spots_available: data.spots });
    });

    return (
        <form onSubmit={onSubmit}>
            <InputForm<IActivitiesFormFields>
                label="Nombre"
                name="n_activity"
                type="text"
                register={register}
                error={errors.n_activity?.message}
            />
            <InputForm<IActivitiesFormFields>
                label="Imagen"
                name="img_activity"
                type="text"
                register={register}
                error={errors.img_activity?.message}
            />
            
            <SelectForm<IActivitiesFormFields>
                label="Día"
                name="week_day"
                options={[
                    { value: "Lunes", label: "Lunes" },
                    { value: "Martes", label: "Martes" },
                    { value: "Miercoles", label: "Miercoles" },
                    { value: "Jueves", label: "Jueves" },
                    { value: "Viernes", label: "Viernes" },
                    { value: "Sabado", label: "Sabado" },
                    { value: "Domingo", label: "Domingo" },
                ]}
                register={register}
                error={errors.week_day?.message}
            />
            
            <SelectForm<IActivitiesFormFields>
                label="Hora"
                name="slot_hour"
                options={[
                    { value: "08:00-09:00", label: "08:00-09:00" },
                    { value: "09:00-10:00", label: "09:00-10:00" },
                    { value: "10:00-11:00", label: "10:00-11:00" },
                    { value: "11:00-12:00", label: "11:00-12:00" },
                    { value: "12:00-13:00", label: "12:00-13:00" },
                    { value: "13:00-14:00", label: "13:00-14:00" },
                    { value: "16:00-17:00", label: "16:00-17:00" },
                    { value: "17:00-18:00", label: "17:00-18:00" },
                    { value: "18:00-19:00", label: "18:00-19:00" },
                    { value: "19:00-20:00", label: "19:00-20:00" },
                ]}
                register={register}
                error={errors.slot_hour?.message}
            />
                
                
                
            <InputForm<IActivitiesFormFields>
                label="descripcion"
                name="description"
                type="text"
                register={register}
                error={errors.description?.message}
            />
            <InputForm<IActivitiesFormFields>
                label="Plazas"
                name="spots"
                type="number"
                register={register}
                error={errors.spots?.message}
            />
            <InputForm<IActivitiesFormFields>
                label="ID Instructor"
                name="id_user_instructor"
                type="text"
                register={register}
                error={errors.id_user_instructor?.message}
            />
            <InputForm<IActivitiesFormFields>
                label="ID Deporte"
                name="id_sport"
                type="number"
                register={register}
                error={errors.id_sport?.message}
            />
            
            
            

            <button type="submit" className = "mt-4 w-1/2 p-2 rounded bg-button1 hover:bg-button1_hover text-button1_text transition duration-200">
                {activity_data ? "Actualizar" : "Crear"}
            </button>
        </form>
    );
};

export default ActivityForm;