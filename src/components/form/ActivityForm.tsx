import * as yup from "yup";
import { useForm } from "react-hook-form";
import useActivity from "../../hooks/useActivitiy";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { IActivitiesFormFields, IActivitiesFormProps } from "../../shared/interfaces/InterfacesComponents/form/ActivitiesForm.interface";
import InputForm from "../inputs/InputForm";
import SelectForm from "../inputs/SelectForm";
import { UserService } from "../../services/user.service";
import { ISelectFormOption } from "../../shared/interfaces/InterfacesComponents/inputs/SelectForm.interface";
import { useSportsContext } from "../../hooks/useSportsContext";

const schema = yup.object().shape({
    n_activity: yup
        .string()
        .required("*El nombre de la actividad es obligatorio")
        .min(3, "*El nombre debe tener al menos 3 caracteres")
        .max(100, "*El nombre no puede exceder los 100 caracteres"),
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
        .required("*La descripción de la actividad es obligatoria"),
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
            slot_hour: "",
            description: "",
            spots: 0,
            id_user_instructor: "",
            id_sport: 1,
        },
        resolver: yupResolver(schema),
    });

    const [instructors_data, setInstructors_data] = useState<ISelectFormOption[]>([]);
    const [sports_data, setSports_data] = useState<ISelectFormOption[]>([]);
    const { sports } = useSportsContext();

    const getInstructors = async () => {
        const { instructors } = await UserService.getInstructors();
        const instructors_array = instructors.map((instructor) => ({
            value: instructor.instructor.id_user!.toString(),
            label: instructor.username,
        }));
        setInstructors_data(instructors_array);
    };

    useEffect(() => {
        getInstructors();
    }, []);

    useEffect(() => {
        const sports_array = sports.map((sport) => ({
            value: sport.id_sport.toString(),
            label: sport.n_sport,
        }));
        setSports_data(sports_array);
    }, [sports]);

    useEffect(() => {
        if (activity_data && instructors_data.length > 0 && sports_data.length > 0) {
            reset({
                n_activity: activity_data.n_activity || "",
                img_activity: activity_data.img_activity || "",
                week_day: activity_data.week_day || "",
                slot_hour: activity_data.slot_hour || "",
                description: activity_data.description || "",
                spots: activity_data.spots || 0,
                id_user_instructor: activity_data.id_user_instructor || "",
                id_sport: activity_data.id_sport || 1,
            });
        }
    }, [activity_data, instructors_data, sports_data, reset]);

    const onSubmit = handleSubmit((data: IActivitiesFormFields) => {
        
        
        const payload = { ...activity_data, ...data, spots_available: data.spots, id_sport: parseInt(data.id_sport as string) };
        if (!activity_data) {
            createActivity(payload);
        } else {
            updateActivity(payload);
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-4">
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
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                </div>

                <div className="flex w-full justify-center gap-4">
                    <div className="w-4/5">
                        <InputForm<IActivitiesFormFields>
                            label="Descripcion"
                            name="description"
                            type="text"
                            register={register}
                            error={errors.description?.message}
                        />
                    </div>
                    <div className="w-1/5">
                        <InputForm<IActivitiesFormFields>
                            label="Plazas"
                            name="spots"
                            type="number"
                            register={register}
                            error={errors.spots?.message}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <SelectForm<IActivitiesFormFields>
                        label="Instructor"
                        name="id_user_instructor"
                        options={instructors_data}
                        register={register}
                        error={errors.id_user_instructor?.message}
                    />

                    <SelectForm<IActivitiesFormFields>
                        label="Deporte"
                        name="id_sport"
                        options={sports_data}
                        register={register}
                        error={errors.id_sport?.message}
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 p-2 rounded bg-button1 hover:bg-button1_hover text-button1_text transition duration-200"
                >
                    {activity_data ? "Actualizar" : "Crear"}
                </button>
            </div>
        </form>
    );
};

export default ActivityForm;
