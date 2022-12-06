import React from 'react';
import styles from './PageNotFound.module.scss';
import clsx from 'clsx';

const PageNotFound = () => {

	return (
		<div className={styles.root}>
			<div className={styles.circles}>
				<p>404
					<br />
					<small>PAGE NOT FOUND</small>
				</p>
				<span className={clsx(styles.circle, styles.big)}></span>
				<span className={clsx(styles.circle, styles.med)}></span>
				<span className={clsx(styles.circle, styles.small)}></span>
			</div>
		</div>
	);
};

export default PageNotFound;