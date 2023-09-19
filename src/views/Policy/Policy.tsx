import './Policy.scss';

export const Policy = () => {
  const date = '18 Septiembre 2023';
  const company = 'Davidyero'
  const app = 'Festivos del mundo'
  const companyLocation = 'Bogotá - Colombia'
  const email = 'davidyero366@gmail.com'
  const title = 'Politica de privacidad - Festivos del mundo'

  return (
    <div className={'policy__container'}>
      <h1>{title}</h1>
      <label>Fecha de entrada en vigencia: <b>{date}</b>6</label>
      <br/>
      <label>1. Introducción</label>
      <br/>
      <label>
        Esta política de privacidad de datos describe cómo {company} administra la privacidad de los usuarios de nuestra aplicación móvil "{app}". La Aplicación se ha diseñado de manera que no recopila ni almacena ningún tipo de información personal o no personal de sus usuarios.
      </label>
      <br/>
      <label>
        2. Ausencia de Recopilación de Datos
      </label>
      <br/>
      <label>
        La Aplicación FestivoApp no recopila ni almacena información personal o no personal de los usuarios. No solicitamos ni almacenamos nombres, direcciones de correo electrónico, ubicaciones geográficas ni ninguna otra información identificable.
      </label>
      <br/>
      <label>
        3. Uso de la Información
      </label>
      <br/>
      <label>
        Puedes utilizar la Aplicación FestivoApp sin preocuparte por la recopilación de datos personales. No realizamos seguimiento de tus actividades ni recopilamos ningún tipo de información durante el uso de la Aplicación.
      </label>
      <br/>
      <label>
        4. Privacidad y Seguridad

      </label>
      <label>
        A pesar de que no recopilamos datos, hemos implementado medidas de seguridad para proteger tu privacidad y garantizar que la Aplicación sea segura de usar.
      </label>
      <br/>
      <label>
        5. Cambios en la Política de Privacidad
      </label>
      <br/>
      <label>
        Nos reservamos el derecho de modificar esta Política en cualquier momento. Te notificaremos sobre cambios significativos a través de la Aplicación o por otros medios.
      </label>
      <br/>
      <label>
        8. Contacto
      </label>
      <br/>
      <label>
        Si tienes alguna pregunta sobre esta Política de Privacidad o cualquier asunto relacionado con la privacidad de datos, puedes contactarnos a través de {email}.
        Al utilizar la Aplicación, aceptas los términos y condiciones de esta Política de Privacidad. Si no estás de acuerdo con esta Política, por favor, no utilices la Aplicación.
      </label>
      <br/>
      <b>Fecha de entrada en vigencia: {date}</b>
      <br/>
      <b>{company}</b>
      <br/>
      <b>{companyLocation}</b>
      <br/>
      <b>{email}</b>
      <br/>
    </div>
  );
}
