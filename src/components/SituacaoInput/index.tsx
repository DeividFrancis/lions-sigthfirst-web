import { InputHTMLAttributes } from "react";
import { useQuery } from "@tanstack/react-query";
import { SituacaoService } from "~/services/SituacaoService";
import { useFormContext } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function SituacaoInput({ label, name, ...rest }: Props) {
  const { register } = useFormContext(); // retrieve those props

  const { data, isLoading } = useQuery({
    queryKey: ["situacao"],
    queryFn: () => SituacaoService.findAll(),
  });

  return (
    <div>
      <label
        htmlFor="situacao"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id="situacao"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register(name)}
      >
        {isLoading ? (
          <option selected>Carregando...</option>
        ) : (
          <option selected>Escolha uma situação</option>
        )}
        {!isLoading &&
          data?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.descricao}
            </option>
          ))}
      </select>
    </div>
  );
}
