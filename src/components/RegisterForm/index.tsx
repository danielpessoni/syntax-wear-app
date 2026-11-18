import { useRegisterForm } from "./register-form.schema.ts";

const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits ? `(${digits}` : "";
  }

  const areaCode = digits.slice(0, 2);
  const subscriberNumber = digits.slice(2);
  const prefix = `(${areaCode}) `;
  const firstGroupLength = digits.length > 10 ? 5 : 4;

  if (subscriberNumber.length <= firstGroupLength) {
    return `${prefix}${subscriberNumber}`;
  }

  return `${prefix}${subscriberNumber.slice(0, firstGroupLength)}-${subscriberNumber.slice(firstGroupLength)}`;
};

export const RegisterForm = () => {
  const { register, errors, isSubmitting } = useRegisterForm();
  const phoneRegistration = register("phone");

  return (
    <form className="text-black">

      {/* Campo de e-mail */}
      <div>
        <label className="text-xs text-gray-600">E-mail*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-accent"}`} type="email" {...register("email")} />

        {errors.email && <p className="text-xs text-error mt-1">{errors.email.message}</p>}
      </div>

      {/* Campo de senha */}
      <div>
        <label className="text-xs text-gray-600">Senha*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-accent"}`} type="password" {...register("password")} />

        {errors.password && <p className="text-xs text-error mt-1">{errors.password.message}</p>}
      </div>

      {/* Campo de confirmar senha */}
      <div>
        <label className="text-xs text-gray-600">Confirmar senha*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.confirmPassword ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-accent"}`} type="password" {...register("confirmPassword")} />

        {errors.confirmPassword && <p className="text-xs text-error mt-1">{errors.confirmPassword.message}</p>}
      </div>

      {/* Campo de nome */}
      <div>
        <label className="text-xs text-gray-600">Nome*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.firstName ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-accent"}`} type="text" {...register("firstName")} />

        {errors.firstName && <p className="text-xs text-error mt-1">{errors.firstName.message}</p>}
      </div>

      {/* Campo de sobrenome */}
      <div>
        <label className="text-xs text-gray-600">Sobrenome*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.lastName ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-accent"}`} type="text" {...register("lastName")} />

        {errors.lastName && <p className="text-xs text-error mt-1">{errors.lastName.message}</p>}
      </div>

      {/* Campo de CPF */}
      <div>
        <label className="text-xs text-gray-600">CPF*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cpf ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-accent"}`} type="text" {...register("cpf")} />

        {errors.cpf && <p className="text-xs text-error mt-1">{errors.cpf.message}</p>}
      </div>

      {/* Campo de data de nascimento */}
      <div>
        <label className="text-xs text-gray-600">Data de nascimento</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.birthDate ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-accent"}`} type="date" {...register("birthDate")} />

        {errors.birthDate && <p className="text-xs text-error mt-1">{errors.birthDate.message}</p>}
      </div>

      {/* Campo de celular */}
      <div>
        <label className="text-xs text-gray-600">Telefone*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.phone ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-accent"}`} type="tel" {...phoneRegistration} onChange={(event) => {
          event.target.value = formatPhoneNumber(event.target.value);
          phoneRegistration.onChange(event);
        }} />

        {errors.phone && <p className="text-xs text-error mt-1">{errors.phone.message}</p>}
      </div>

        <button disabled={isSubmitting} className="bg-accent text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-accent-hover disabled:opacity-50 w-full cursor-pointer mt-4">
            {isSubmitting ? "Enviando..." : "Continuar"}
        </button>

    </form>
  );
};
