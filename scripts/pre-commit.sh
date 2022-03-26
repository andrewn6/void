echo "Running pre-commit script..."
cd server
yarn
echo 'Completed'
RESULT=$?
git stash pop -q
[ $RESULT -ne 0 ] && exit 1
exit 0