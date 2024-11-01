
const dashboardGet = (req, res) => {
    try {
        const admin = req.session.admin; 
        if (admin) {
            res.send('Welcome to the admin dashboard!');
        } else {
            res.status(403).send('Access denied. You are not an admin.');
        }
    }
    catch (err) {
        console.log('Signin failed 500', err);
        res.status(500).json('dashboard error', err);
    }
}

module.exports = { dashboardGet }