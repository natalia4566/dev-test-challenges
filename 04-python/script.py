import re

users = [
    {"name": "Alice", "email": "alice@gmail.com"},
    {"name": "Bob",   "email": "bob@yahoo.com"},
    {"name": "Carol", "email": "alice@gmail.com"},   # duplicate
    {"name": "Dave",  "email": "dave@gmail.com"},
    {"name": "Eve",   "email": "not-an-email"},      # invalid
    {"name": "Frank", "email": "frank@"},            # invalid
]

def validate_email(email):
    # Proper email validation using regex
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return re.match(pattern, email) is not None


def group_by_domain(users):
    result = {}
    seen_emails = set()  # deduplication

    for user in users:
        email = user["email"]

        # skip invalid emails
        if not validate_email(email):
            continue

        # skip duplicates
        if email in seen_emails:
            continue

        seen_emails.add(email)

        # extract domain
        domain = email.split("@")[1]

        # count occurrences properly
        result[domain] = result.get(domain, 0) + 1

    return result


output = group_by_domain(users)
print(output)