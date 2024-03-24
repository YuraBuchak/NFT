import React, { useState } from 'react';
import scss from './ContactForm.module.scss';
import { ReactComponent as IconDisc } from '../../icons/discord.svg';
import { ReactComponent as IconMeta } from '../../icons/meta.svg';

const ContactForm = () => {
  const [discord, setDiscord] = useState('');
  const [meta, setMeta] = useState('');
  const [discordError, setDiscordError] = useState('');
  const [metaError, setMetaError] = useState('');

  const handleSubmitForm = event => {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      const data = {
        discord,
        meta,
      };

      console.log(data);
      setDiscord('');
      setMeta('');
    }
  };

  const validate = () => {
    let isValid = true;

    if (!discord || discord.length < 3 || !/^@[a-zA-Z0-9_]+$/.test(discord)) {
      setDiscordError('Wrong discord');
      isValid = false;
    } else {
      setDiscordError('');
    }
    if (
      !meta ||
      meta.length < 3 ||
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(meta)
    ) {
      setMetaError('Wrong address');
      isValid = false;
    } else {
      setMetaError('');
    }

    return isValid;
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      autoComplete="off"
      noValidate
      className={scss.form}
    >
      <div className={scss.labelWrapper}>
        <div className={scss.iconWrapper}>
          <IconDisc className={scss.iconDisc} />
        </div>
        <label className={scss.label}>
          <input
            className={`${scss.input} ${discordError ? scss.errorInput : ''}`}
            type="text"
            name="discord"
            value={discord}
            onChange={e => setDiscord(e.target.value)}
            placeholder="@username"
            maxLength={15}
            required
          />
        </label>
        {discordError && <p className={scss.error}>{discordError}</p>}
      </div>

      <div className={scss.labelWrapper}>
        <div className={scss.iconWrapper}>
          <IconMeta className={scss.iconMeta} />
        </div>
        <label className={scss.label}>
          <input
            className={`${scss.input} ${metaError ? scss.errorInput : ''}`}
            type="email"
            name="meta"
            value={meta}
            onChange={e => setMeta(e.target.value)}
            placeholder="Wallet address"
            maxLength={15}
            required
          />
        </label>
        {metaError && <p className={scss.error}>{metaError}</p>}
      </div>

      <button className={scss.btn} type="submit">
        MINT
      </button>
    </form>
  );
};

export default ContactForm;
